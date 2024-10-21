import { InsuranceInput } from '../model/Insurance';

export class InsuranceService {
  calculatePremium(input: InsuranceInput): number {
    let basePremium = 500;

    // Adjust base premium based on age
    if (input.age < 25) basePremium += 200;
    else if (input.age > 50) basePremium += 100;

    // Gender factor
    if (input.gender === 'male') basePremium += 50;

    // Vehicle type factor
    if (input.vehicleType === 'car') basePremium += 100;
    else if (input.vehicleType === 'motorcycle') basePremium += 150;

    // Location factor
    if (input.location === 'urban') basePremium += 100;
    else if (input.location === 'rural') basePremium -= 50;

    // Accident history factor
    if (input.hasAccidents) basePremium += 300;

    return basePremium;
  }
}
