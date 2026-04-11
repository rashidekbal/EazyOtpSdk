# EazyOtp

A lightweight, free, and easy-to-use Node.js SDK for sending Email OTPs (One-Time Passwords) via the EazyOtp microservice.

## Installation

Install the package via npm:

```bash
npm install eazyotp
```

## Features
- **Fast & Reliable**: Connects directly to the EazyOtp microservice.
- **Built-in Validation**: Automatically validates email formats before sending requests.
- **Promise-based**: Uses modern `Promises` with `async/await` for seamless integration.
- **Typescript Support**: The package is written in TypeScript and exports its own types.

## Usage

This package is implemented as an ES Module. You can use it in your application by importing the default `sendOtp` function.

### Basic Example (Async/Await)

```javascript
import sendOtp from "eazyotp";

async function requestOtp() {
  const email = "user@example.com";
  // The name of your platform to show the user
  const company = "My Awesome App"; 
  // Your API Key for EazyOtp
  const apiKey = "your-api-key-here";

  try {
    const response = await sendOtp(email, company, apiKey);
    console.log("Status:", response.status);
    console.log("Sent OTP:", response.message);
  } catch (error) {
    console.error("Failed to send OTP:", error);
  }
}

requestOtp();
```

### Promises Example

```javascript
import sendOtp from "eazyotp";

const email = "user@example.com";
const company = "My Awesome App";
const apiKey = "your-api-key-here";

sendOtp(email, company, apiKey)
  .then((response) => {
    console.log("Status:", response.status);
    console.log("Sent OTP:", response.message);
  })
  .catch((error) => {
    console.error("Failed to send OTP:", error);
  });
```

## API Reference

### `sendOtp(email, company, apiKey)`

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `email`   | `string` | The recipient's email address. Must be a valid email format. |
| `company` | `string` | The name of your company or application sending the OTP.  |
| `apiKey`  | `string` | Your securely generated EazyOtp API Key.                  |

**Returns:** 
A Promise that resolves with the server response if successful. The response object typically contains a `status` and a `message` where the `message` holds the sent OTP. 

**Example Response:**
```json
{
  "status": "success",
  "message": "123456"
}
```

If an error occurs, the Promise is rejected with an error object/string.

## Error Handling

The SDK will quickly reject the promise with an `"invalid email"` string if the format is incorrect. For API-related or network errors, it throws the `axios` error context.

## License

[ISC](https://choosealicense.com/licenses/isc/)

## Author

**Rasid Ekbal**
