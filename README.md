# __Receipt Processor__
>
## __Description__

This application processes receipt data and calculates points based on specific rules. It includes two main endpoints: one for processing receipts and another for retrieving points for a specific receipt.

## __Requirements__
- __Docker__
- __Node.js and npm (if not using Docker)__

## __Getting Started__

### __Clone the Repository__
```
git clone https://github.com/syed6268/Receiptprocessor.git
cd Receiptprocessor
```
## __Running the Application__
### __Using Docker (Preferred Method)__
__1. Build the Docker image:__
```
docker build -t receipt-processor .
```
__2. Run the Docker container:__
``` 
docker run -p 8080:8080 receipt-processor
```
__3. Access the application:__

Open http://localhost:8080 in your browser to see the application.

### __Without Docker__
If Docker is not available, follow these steps to run the application manually.
#### __Backend and Frontend Setup__
__1. Install backend dependencies:__
```
npm install
```
__2. Install frontend dependencies:__
```
cd frontend
npm install
cd ..
```

__3. Start the backend and frontend servers concurrently:__
```
npm run dev
```

__4. Access the application:__

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## __API Endpoints__

### __Process Receipts__

- __Endpoint:__ `/receipts/process`
- __Method:__ `POST`
- __Payload:__ Receipt JSON
- __Response:__ JSON containing an ID for the receipt

__Example Request:__
```json
{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    { "shortDescription": "Mountain Dew 12PK", "price": "6.49" },
    { "shortDescription": "Emils Cheese Pizza", "price": "12.25" }
  ],
  "total": "18.74"
}
```
__Example Response:__
```
{ "id": "7fb1377b-b223-49d9-a31a-5a02701dd310" }
```
### __Get Points__
- __Endpoint:__ `/receipts/{id}/points`
- __Method:__ `GET`
- __Response:__ JSON containing the number of points awarded

__Example Response:__
```
{ "points": 32 }
```
### __Points Calculation Rules__
1. One point for every alphanumeric character in the retailer name.
2. 50 points if the total is a round dollar amount with no cents.
3. 25 points if the total is a multiple of 0.25.
4. 5 points for every two items on the receipt.
5. If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer.
6. 6 points if the day in the purchase date is odd.
7. 10 points if the time of purchase is after 2:00pm and before 4:00pm.

### __Example Calculations__
Request:
```
{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    { "shortDescription": "Mountain Dew 12PK", "price": "6.49" },
    { "shortDescription": "Emils Cheese Pizza", "price": "12.25" },
    { "shortDescription": "Knorr Creamy Chicken", "price": "1.26" },
    { "shortDescription": "Doritos Nacho Cheese", "price": "3.35" },
    { "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ", "price": "12.00" }
  ],
  "total": "35.35"
}
```
##### __Total Points: 28__

#### __Breakdown:__

- 6 points - retailer name has 6 characters
- 10 points - 4 items (2 pairs @ 5 points each)
- 3 Points - "Emils Cheese Pizza" is 18 characters (a multiple of 3)
  - item price of 12.25 * 0.2 = 2.45, rounded up is 3 points
- 3 Points - "Klarbrunn 12-PK 12 FL OZ" is 24 characters (a multiple of 3)
  - item price of 12.00 * 0.2 = 2.4, rounded up is 3 points
- 6 points - purchase day is odd