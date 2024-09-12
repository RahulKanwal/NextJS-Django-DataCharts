from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def candlestickData(request):
    # Dummy data
    # data = [
    #     {"id": 1, "name": "Product 1", "price": 10.99, "description": "Description for product 1"},
    #     {"id": 2, "name": "Product 2", "price": 23.50, "description": "Description for product 2"},
    #     {"id": 3, "name": "Product 3", "price": 5.75, "description": "Description for product 3"},
    # ]
    # data = [{"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},{"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},]
    data = [
    {"date": "2023-01-01", "open": 125.12, "close": 121.44, "high": 134.81, "low": 111.51},
    {"date": "2023-01-02", "open": 139.69, "close": 138.71, "high": 146.76, "low": 137.28},
    {"date": "2023-01-03", "open": 158.37, "close": 162.68, "high": 168.1, "low": 156.59},
    {"date": "2023-01-04", "open": 158.61, "close": 154.3, "high": 160.48, "low": 151.43},
    {"date": "2023-01-05", "open": 135.33, "close": 136.4, "high": 141.88, "low": 127.57},
    {"date": "2023-01-06", "open": 125.94, "close": 134.47, "high": 139.57, "low": 118.14},
    {"date": "2023-01-07", "open": 122.39, "close": 120.2, "high": 130.14, "low": 111.76},
    {"date": "2023-01-08", "open": 104.19, "close": 102.05, "high": 105.29, "low": 94.36},
    {"date": "2023-01-09", "open": 129.95, "close": 134.23, "high": 137.59, "low": 124.63},
    {"date": "2023-01-10", "open": 116.38, "close": 108.27, "high": 121.98, "low": 106.99},
    {"date": "2023-01-11", "open": 146.34, "close": 139.73, "high": 156.31, "low": 136.9},
    {"date": "2023-01-12", "open": 176.82, "close": 183.03, "high": 190.36, "low": 167.04},
    {"date": "2023-01-13", "open": 135.07, "close": 142.88, "high": 143.6, "low": 130.92},
    {"date": "2023-01-14", "open": 137.33, "close": 137.64, "high": 144.68, "low": 131.59},
    {"date": "2023-01-15", "open": 107.87, "close": 109.26, "high": 113.41, "low": 100.69},
    {"date": "2023-01-16", "open": 146.87, "close": 136.89, "high": 151.38, "low": 130.38},
    {"date": "2023-01-17", "open": 130.97, "close": 123.96, "high": 134.54, "low": 123.66},
    {"date": "2023-01-18", "open": 159.68, "close": 163.5, "high": 170.32, "low": 157.14},
    {"date": "2023-01-19", "open": 174.5, "close": 169.3, "high": 179.64, "low": 162.34},
    {"date": "2023-01-20", "open": 156.11, "close": 148.73, "high": 166.01, "low": 141.38},
    {"date": "2023-01-21", "open": 105.72, "close": 97.33, "high": 112.79, "low": 95.87},
    {"date": "2023-01-22", "open": 192.29, "close": 189.57, "high": 200.89, "low": 184.97},
    {"date": "2023-01-23", "open": 118.98, "close": 123.49, "high": 128.8, "low": 114.99},
    {"date": "2023-01-24", "open": 118.03, "close": 113.41, "high": 119.21, "low": 112.21},
    {"date": "2023-01-25", "open": 106.01, "close": 100.42, "high": 115.35, "low": 94.95},
    {"date": "2023-01-26", "open": 198.4, "close": 192.22, "high": 202.89, "low": 187.95},
    {"date": "2023-01-27", "open": 176.49, "close": 170.83, "high": 183.04, "low": 164.48},
    {"date": "2023-01-28", "open": 169.33, "close": 163.22, "high": 169.94, "low": 160.12},
    {"date": "2023-01-29", "open": 195.57, "close": 200.97, "high": 210.96, "low": 193.29},
    {"date": "2023-01-30", "open": 170.13, "close": 162.58, "high": 170.97, "low": 155.93}
]

    
    return JsonResponse(data, safe=False)

def lineChartData(request):
    data = [
    {"date": "2023-01-01", "value": 100.0},
    {"date": "2023-01-02", "value": 106.5},
    {"date": "2023-01-03", "value": 113.0},
    {"date": "2023-01-04", "value": 119.5},
    {"date": "2023-01-05", "value": 126.0},
    {"date": "2023-01-06", "value": 107.5},
    {"date": "2023-01-07", "value": 104.0},
    {"date": "2023-01-08", "value": 100.5},
    {"date": "2023-01-09", "value": 97.0},
    {"date": "2023-01-10", "value": 93.5},
    {"date": "2023-01-11", "value": 115.0},
    {"date": "2023-01-12", "value": 121.5},
    {"date": "2023-01-13", "value": 128.0},
    {"date": "2023-01-14", "value": 134.5},
    {"date": "2023-01-15", "value": 141.0},
    {"date": "2023-01-16", "value": 122.5},
    {"date": "2023-01-17", "value": 119.0},
    {"date": "2023-01-18", "value": 115.5},
    {"date": "2023-01-19", "value": 112.0},
    {"date": "2023-01-20", "value": 108.5},
    {"date": "2023-01-21", "value": 130.0},
    {"date": "2023-01-22", "value": 136.5},
    {"date": "2023-01-23", "value": 143.0},
    {"date": "2023-01-24", "value": 149.5},
    {"date": "2023-01-25", "value": 156.0},
    {"date": "2023-01-26", "value": 137.5},
    {"date": "2023-01-27", "value": 134.0},
    {"date": "2023-01-28", "value": 130.5},
    {"date": "2023-01-29", "value": 127.0},
    {"date": "2023-01-30", "value": 123.5}
]
    return JsonResponse(data, safe=False)

def barChartData(request):
    data = [
    {"category": "Category A", "value": 30},
    {"category": "Category B", "value": 45},
    {"category": "Category C", "value": 25},
    {"category": "Category D", "value": 60},
    {"category": "Category E", "value": 40},
    {"category": "Category F", "value": 55},
    {"category": "Category G", "value": 20}
]
    return JsonResponse(data, safe=False)

def pieChartData(request):
    data = [
    {"segment": "Segment A", "value": 35},
    {"segment": "Segment B", "value": 25},
    {"segment": "Segment C", "value": 15},
    {"segment": "Segment D", "value": 10},
    {"segment": "Segment E", "value": 15}
]
    return JsonResponse(data, safe=False)


#def candlestick_data(request):
    