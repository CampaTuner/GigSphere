from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Watchlist
from .serializers import WatchlistSerializer


class WatchlistAPI(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Get current user's watchlist"""
        watchlist = Watchlist.objects.filter(user=request.user)
        serializer = WatchlistSerializer(watchlist, many=True)
        return Response({
            "success": True,
            "message": "User Watchlist retrieved successfully",
            "watchlist": serializer.data,
        }, status=status.HTTP_200_OK)

    def post(self, request):
        """Add coin to watchlist"""
        data = request.data.copy()
        data['user'] = request.user.id  # Force current user

        serializer = WatchlistSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success": True,
                "message": "Coin added to watchlist successfully",
                "watchlist": serializer.data,
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            "success": False,
            "message": "Failed to add to watchlist",
            "errors": serializer.errors,
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        """Delete specific coin or clear entire watchlist"""
        coin = request.query_params.get('coin')
        
        if coin:
            deleted, _ = Watchlist.objects.filter(user=request.user, coin=coin).delete()
            if deleted:
                return Response({
                    "success": True,
                    "message": f"Coin {coin} removed successfully",
                }, status=status.HTTP_200_OK)
            return Response({
                "success": False,
                "message": "Coin not found in watchlist",
            }, status=status.HTTP_404_NOT_FOUND)
        else:
            # Clear all
            Watchlist.objects.filter(user=request.user).delete()
            return Response({
                "success": True,
                "message": "Watchlist cleared successfully",
            }, status=status.HTTP_200_OK)