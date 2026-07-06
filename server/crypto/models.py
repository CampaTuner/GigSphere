from django.db import models

class Watchlist(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    coin = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'coin')  # Prevents duplicates at DB level

    def __str__(self):
        return f"{self.user} - {self.coin}"