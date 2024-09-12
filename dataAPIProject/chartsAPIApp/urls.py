# myapp/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('candlestick-data/', candlestickData, name='candlestick'),
    path('line-chart-data/', lineChartData, name='linechart'),
    path('bar-chart-data/', barChartData, name='barchart'),
    path('pie-chart-data/', pieChartData, name='piechart'),
]