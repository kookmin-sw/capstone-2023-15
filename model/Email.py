import collections
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from dotenv import load_dotenv
import os 

load_dotenv()

class Email:

    def __init__(self, to_email, collectionName) -> None:
        # Set email parameters
        self.from_email = os.environ.get('SERVICE_EMAIL')
        self.to_email = to_email
        self.password = os.environ.get('EMAIL_APP_PASSWORD')
        self.collectionName = collectionName

        # Write email subject and message
        self.subject = "Copy NFTs found on OpenSea"
        self.message = f"""
        Dear OpenSea Support,

        I am writing to report a number of copy NFTs that I have found on your platform. The NFTs are listed under the \"{collectionName} collection \", but they are not authentic.

        I have attached a CSV file that contains a list of the copy NFTs. I would like to request that you PLEASE REMOVE these NFTs from your platform.

        Thank you for your time and attention to this matter.

        Sincerely,
        [Find Fake nFt]
        """

        # Send email
        # self.send_email(subject, message, from_email, to_email)\

    def send_email(self):
        # Create message container
        msg = MIMEMultipart()
        msg['From'] = self.from_email
        msg['To'] = self.to_email
        msg['Subject'] = self.subject

        # Attach message to email
        msg.attach(MIMEText(self.message, 'plain'))

        # Attach the CSV file
        filename = self.collectionName+'.csv'
        with open('./csvs/' + filename, 'rb') as attachment:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition',
                            f'attachment; filename= {filename}')
            msg.attach(part)

        # Create SMTP server object and send email
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(self.from_email, self.password)

        # Bold the important parts of the message


        # Send the email
        server.sendmail(self.from_email, self.to_email, msg.as_string())
        server.quit()

        print("Done!")
