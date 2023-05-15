import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

def send_email(subject, message, from_email, to_email, password):
    # Create message container
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    # Attach message to email
    msg.attach(MIMEText(message, 'plain'))

    # Attach the zip file
    filename = '../image/images.zip'
    with open(filename, 'rb') as attachment:
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(attachment.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', f'attachment; filename= {filename}')
        msg.attach(part)

    # Create SMTP server object and send email
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(from_email, password)
    text = msg.as_string()
    server.sendmail(from_email, to_email, text)
    server.quit()

    print("Done !")

# run
client_email = input("클라이언트의 이메일을 입력하세요 : ")
title =  f"REQ[{client_email}]"
msg =  f"REQ[{client_email}]"

send_email(title, msg, "hpyho112@gmail.com", client_email, "rvhhkgmicajzelxv")