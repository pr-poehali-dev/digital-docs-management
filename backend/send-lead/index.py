import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту pas.do100let@gmail.com"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    fio = body.get('fio', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    source = body.get('source', 'Сайт')

    if not fio or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните обязательные поля'})
        }

    smtp_user = 'pas.do100let@gmail.com'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {fio}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0a2d8f; border-bottom: 2px solid #e3000f; padding-bottom: 10px;">
        Новая заявка с сайта
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">ФИО</td>
          <td style="padding: 10px; color: #222;">{fio}</td>
        </tr>
        <tr style="background: #f5f0eb;">
          <td style="padding: 10px; font-weight: bold; color: #555;">Телефон</td>
          <td style="padding: 10px; color: #222;">{phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #555;">E-mail</td>
          <td style="padding: 10px; color: #222;">{email if email else '—'}</td>
        </tr>
        <tr style="background: #f5f0eb;">
          <td style="padding: 10px; font-weight: bold; color: #555;">Источник</td>
          <td style="padding: 10px; color: #222;">{source}</td>
        </tr>
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }