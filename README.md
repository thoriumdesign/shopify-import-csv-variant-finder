# shopify-import-csv-variant-finder

A script to format a Shopify product import CSV, by locating and structuring variants with basal and derived SKUs.

To run the test suite, simply run `npm test`

To execute the appliaction, run `npm start`

You may need to modify the script's RegEx functions to match your product's SKU formatting.

Before running, create a file `products.csv` in a `/data` folder in the root of the project.

Output will be in the same folder, and will be called `variants.csv` and `non-variants.csv`