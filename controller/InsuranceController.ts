import inquirer from 'inquirer';
import { InsuranceService } from '../service/InsuranceService';
import { InsuranceInput } from '../model/Insurance';

export class InsuranceController {
  private insuranceService: InsuranceService;

  constructor() {
    this.insuranceService = new InsuranceService();
  }

  async getInsuranceDetails(): Promise<void> {
    const answers: InsuranceInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'age',
        message: 'Enter your age:',
        validate: (input) => !isNaN(parseInt(input)) || 'Please enter a valid number',
        filter: (input) => parseInt(input),
      },
      {
        type: 'list',
        name: 'gender',
        message: 'Select your gender:',
        choices: ['male', 'female'],
      },
      {
        type: 'list',
        name: 'vehicleType',
        message: 'Select your vehicle type:',
        choices: ['car', 'motorcycle'],
      },
      {
        type: 'list',
        name: 'location',
        message: 'Select your location:',
        choices: ['urban', 'rural'],
      },
      {
        type: 'confirm',
        name: 'hasAccidents',
        message: 'Have you been in any accidents in the past?',
      },
    ]);

    const premium = this.insuranceService.calculatePremium(answers);
    console.log(`Your calculated insurance premium is: $${premium}`);
  }
}
