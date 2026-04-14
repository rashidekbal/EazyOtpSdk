# EazyOtp

A lightweight, free, and easy-to-use Node.js SDK for sending and verifying Email OTPs (One-Time Passwords) via the EazyOtp microservice.

🌐 **Official Website:** [https://eazy-otp-official.vercel.app/](https://eazy-otp-official.vercel.app/)

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
- **Send & Verify**: Comprehensive flow to request an OTP and securely verify the user-provided code.

## Usage

This package is implemented as an ES Module. You can use it in your application by importing the `sendOtp` and `verifyOtp` functions.

### Basic Example (Async/Await)

```javascript
import { sendOtp, verifyOtp } from "eazyotp";

async function authFlow() {
  const email = "user@example.com";
  const company = "My Awesome App"; // The name of your platform to show the user
  const apiKey = "your-api-key-here"; // Your API Key for EazyOtp

  try {
    // 1. Send OTP
    const sendResponse = await sendOtp(email, company, apiKey);
    console.log("Send OTP Response:", sendResponse);

    // 2. Verify OTP
    // Normally you would receive this '123456' from the user input
    const userEnteredOtp = 123456;
    const isVerified = await verifyOtp(email, userEnteredOtp, apiKey);

    if (isVerified) {
      console.log("OTP Verified successfully!");
    } else {
      console.log("Invalid OTP.");
    }
  } catch (error) {
    console.error("Error during OTP flow:", error);
  }
}

authFlow();
```

### Promises Example

```javascript
import { sendOtp } from "eazyotp";

const email = "user@example.com";
const company = "My Awesome App";
const apiKey = "your-api-key-here";

sendOtp(email, company, apiKey)
  .then((response) => {
    console.log("Sent OTP:", response);
  })
  .catch((error) => {
    console.error("Failed to send OTP:", error);
  });
```

## API Reference

### `sendOtp(email, company, apiKey)`

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `email`   | `string` | The recipient's email address. Must be a valid email format. |
| `company` | `string` | The name of your company or application sending the OTP.     |
| `apiKey`  | `string` | Your securely generated EazyOtp API Key.                     |

**Returns:**
A Promise that resolves with the server response if successful. The response object typically contains a `status` and a `message` where the `message` holds information about the action.

**Example Response:**

```json
{
  "status": "200",
  "message": "success"
}
```

If an error occurs, the Promise is rejected with an error object/string.

### `verifyOtp(email, otp, apiKey)`

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `email`   | `string` | The recipient's email address. Must be a valid email format. |
| `otp`     | `number` | The OTP code entered by the user.                            |
| `apiKey`  | `string` | Your securely generated EazyOtp API Key.                     |

**Returns:**
A Promise that resolves to a boolean `true` if the OTP is valid and correctly verified. It resolves to `false` if the verification fails (e.g., wrong OTP).

If an error occurs (such as missing parameters or network errors returning a 403 status), the Promise is rejected.

## Error Handling

The SDK will quickly reject the promise with an `"invalid email"` or `"invalid parameters"` string if the format is incorrect or arguments are missing. For API-related or network errors, it throws the `axios` error context.

## License

[ISC](https://choosealicense.com/licenses/isc/)

## Author

**Rasid Ekbal**
