### WANDERLUSH — API SPECIFICATION

![Next.js API](https://img.shields.io/badge/API-Route_Handlers-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/Contracts-Strict_TypeScript-blue?style=for-the-badge)

**Developer:** Aaditya Gunjal - Full Stack Developer

WanderLush exposes RESTful endpoints implemented via Next.js Route Handlers in `src/app/api/`.

---

## 1. POST /api/newsletter

Subscribes an email lead to travel updates and exclusive offers.

- **URL:** `/api/newsletter`
- **Method:** `POST`
- **Authentication:** None (Public)
- **Headers:** `Content-Type: application/json`

### Request Body

```json
{
  "email": "traveler@example.com"
}
```

### Success Response (`201 Created`)

```json
{
  "success": true,
  "message": "Successfully subscribed to Wanderlush updates."
}
```

### Error Responses

- **`400 Bad Request`** (Invalid Email Format)
  ```json
  {
    "success": false,
    "message": "Invalid email address format.",
    "error": "VALIDATION_FAILED"
  }
  ```

### cURL Example

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"adventurer@example.com"}'
```

---

## 2. GET /api/stays

Queries accommodations with optional category filtering.

- **URL:** `/api/stays`
- **Method:** `GET`
- **Query Parameters:**
  - `category` (optional, string): e.g. `Resort`, `Villa`, `Hotel`, `All`

### Success Response (`200 OK`)

```json
{
  "success": true,
  "message": "Retrieved accommodations for category: Villa.",
  "data": [
    {
      "id": "stay-1",
      "name": "Bromo Valley Villas",
      "place": "East Java, Indonesia",
      "price": "$280",
      "rating": "4.9",
      "category": "Villa",
      "image": "https://images.pexels.com/photos/34790496/pexels-photo-34790496.jpeg?auto=compress&cs=tinysrgb&w=900"
    }
  ]
}
```

### cURL Example

```bash
curl -X GET "http://localhost:3000/api/stays?category=Resort"
```
