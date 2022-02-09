/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* Need above 2 lines to disable rules for papaparse pacakge */
import Papa from 'papaparse'; // Parse csv to json
import { Url } from 'url';
// Papaparse documentation: https://www.papaparse.com/docs

const csvParser = () => {
  function toJson(
    csv: string,
    config = {
      delimiter: ',', // optional
      quoteChar: '"', // optional
      header: true, // Assign header row as the key
      skipEmptyLines: false,
    }
  ) {
    const result: unknown = Papa.parse(csv, config);
    return result;
  }

  return { toJson };
};

export { csvParser };
