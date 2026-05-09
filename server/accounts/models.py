from django.db import models

# Create your models here.
# Django ORM - Object Relational Mapper
# Used to interact with database using python objects
class OtpVerification(models.Model):
    email = models.EmailField()
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)


# CREATE TABLE OtpVerification (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     email VARCHAR(255) NOT NULL,
#     otp VARCHAR(6) NOT NULL,
#     created_at DATETIME NOT NULL
# );
