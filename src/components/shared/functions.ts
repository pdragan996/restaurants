export function getCountryCode(countryName: string): string {
  switch (countryName.toLowerCase()) {
    case 'bih':
    case 'bosna i hercegovina':
    case 'bosnia and herzegovina':
    case 'bosnia & herzegovina':
      return 'BA';

    case 'srbija':
    case 'serbia':
      return 'RS';

    default:
      return 'Unknown';
  }
}