#!/bin/bash
# Quick Test Script for User Activity Platform
# Tests all API endpoints with sample data

BASE_URL="http://localhost:3000"
CONTENT_TYPE="Content-Type: application/json"

echo "=========================================="
echo "User Activity Platform - API Testing"
echo "=========================================="
echo ""

# Test 1: Health Check
echo "1️⃣  Testing Health Check..."
curl -s -X GET "$BASE_URL/api/health" | jq .
echo ""

# Test 2: Create LOGIN Activity
echo "2️⃣  Creating LOGIN Activity..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/api/activities" \
  -H "$CONTENT_TYPE" \
  -d '{
    "userId": "user_test_1",
    "actionType": "LOGIN",
    "metadata": {
      "browser": "Chrome",
      "device": "Desktop",
      "ipAddress": "192.168.1.100"
    }
  }')
echo "$LOGIN_RESPONSE" | jq .
ACTIVITY_ID=$(echo "$LOGIN_RESPONSE" | jq -r '.data.id')
echo "Activity ID: $ACTIVITY_ID"
echo ""

# Test 3: Create LOGOUT Activity
echo "3️⃣  Creating LOGOUT Activity..."
curl -s -X POST "$BASE_URL/api/activities" \
  -H "$CONTENT_TYPE" \
  -d '{
    "userId": "user_test_1",
    "actionType": "LOGOUT",
    "metadata": {
      "sessionDuration": "30 minutes",
      "lastPage": "Dashboard"
    }
  }' | jq .
echo ""

# Test 4: Create SEARCH Activity
echo "4️⃣  Creating SEARCH Activity..."
curl -s -X POST "$BASE_URL/api/activities" \
  -H "$CONTENT_TYPE" \
  -d '{
    "userId": "user_test_2",
    "actionType": "SEARCH",
    "metadata": {
      "searchQuery": "nodejs docker",
      "resultsFound": 250,
      "device": "Mobile"
    }
  }' | jq .
echo ""

# Test 5: Get All Activities
echo "5️⃣  Getting All Activities..."
curl -s -X GET "$BASE_URL/api/activities" | jq .
echo ""

# Test 6: Get Activities with Pagination
echo "6️⃣  Getting Activities with Pagination (page=1, limit=5)..."
curl -s -X GET "$BASE_URL/api/activities?page=1&limit=5" | jq .
echo ""

# Test 7: Filter by userId
echo "7️⃣  Filtering Activities by userId..."
curl -s -X GET "$BASE_URL/api/activities?userId=user_test_1" | jq .
echo ""

# Test 8: Filter by actionType
echo "8️⃣  Filtering Activities by actionType (LOGIN)..."
curl -s -X GET "$BASE_URL/api/activities?actionType=LOGIN" | jq .
echo ""

# Test 9: Get Activity by ID
echo "9️⃣  Getting Activity by ID..."
curl -s -X GET "$BASE_URL/api/activities/$ACTIVITY_ID" | jq .
echo ""

# Test 10: Multiple Filters
echo "🔟 Getting Activities with Multiple Filters..."
curl -s -X GET "$BASE_URL/api/activities?userId=user_test_1&actionType=LOGIN&page=1&limit=10" | jq .
echo ""

echo "=========================================="
echo "✅ Testing Complete!"
echo "=========================================="
