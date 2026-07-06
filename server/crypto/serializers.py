

from rest_framework import serializers
from .models import Watchlist

class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = '__all__'

    def validate(self, attrs):
        user = attrs.get('user')
        coin = attrs.get('coin')
        if Watchlist.objects.filter(user=user, coin=coin).exists():
            raise serializers.ValidationError("Coin is already in watchlist.")
        return attrs
    

