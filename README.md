# Colissimo Pickup Point API Wrapper for Node.js

This package provides a convenient wrapper for the Colissimo PickupPoint Web Services, specifically for the findRDVPointRetraitAcheminement method. It is written in TypeScript, offering type safety and easy integration with TypeScript projects.

## Features

- Easy-to-use interface for the findRDVPointRetraitAcheminement method of Colissimo API.
- Built with TypeScript for type safety.
- Includes TypeScript types for request parameters and response objects.

## Installation

To install the package, run the following command:

```bash
npm install colissimo-pickup-point
```

or if you use Yarn:

```bash
yarn add colissimo-pickup-point
```

## Usage

Here's a basic example of how to use the package:

```typescript
import ColissimoAPI from 'colissimo-pickup-point';

const api = new ColissimoAPI();

// authenticate with your Colissimo credentials
api.authenticate({
  login: 'YOUR_ACCOUNT_NUMBER',
  password: 'YOUR_PASSWORD'
}).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});

// find pickup points
api.findRDVPointRetraitAcheminement({
  accountNumber: 'YOUR_ACCOUNT_NUMBER',
  password: 'YOUR_PASSWORD',
  address: "1 rue de la paix",
  zipCode: "75000",
  city: "PARIS",
  countryCode: "FR",
  weight: "1",
  shippingDate: "01/01/2024",
  filterRelay: "1"
  // ...other parameters
}).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});
```

## API Reference

### `authenticate(params: AuthenticateParams): Promise<AuthenticateResponse>`

Authenticates with the Colissimo API.

- `params`: An object containing the following parameters:
  - `login`: Your Colissimo account number.
  - `password`: Your Colissimo password.

Returns

A Promise that resolves to the response object of the authenticate method.

### `findRDVPointRetraitAcheminement(params: FindRDVPointRetraitAcheminementParams): Promise<FindRDVPointRetraitAcheminementResponse>`

Fetches pickup points based on provided parameters.

- `params`: An object containing all necessary parameters as per the Colissimo API documentation.

Returns

A Promise that resolves to the response object of the findRDVPointRetraitAcheminement method.

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This package is not affiliated with Colissimo or La Poste in any way. It is an independent wrapper for the Colissimo PickupPoint Web Services.
