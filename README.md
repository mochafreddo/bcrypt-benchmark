# bcrypt-benchmark

This project is designed to benchmark the performance of bcrypt hashing at different salt rounds. It helps in determining the optimal number of rounds for hashing passwords, balancing security and performance.

## Getting Started

To run this project, you need Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running:

```bash
npm install
```

### Usage

Run the benchmark test by executing:

```bash
node bcrypt-benchmark.js
```

The script will test bcrypt hashing from 8 to 16 rounds and log the duration for each round to the console.

## Dependencies

- bcrypt: ^5.1.1

See `package.json` for more details.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the ISC License. See the LICENSE file for details.
