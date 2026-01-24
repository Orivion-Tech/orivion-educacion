import { Component } from '@angular/core';
import { WizardStepComponent } from '../../components/wizard-step.component';

@Component({
  selector: 'saa-student-onboarding',
  standalone: true,
  imports: [WizardStepComponent],
  template: `
    <h2 class="text-2xl font-semibold mb-4">Onboarding</h2>
    <div class="space-y-4">
      <saa-wizard-step step="1" title="Perfil" description="Completa tu información."></saa-wizard-step>
      <saa-wizard-step
        step="2"
        title="Diagnóstico"
        description="Responde las preguntas iniciales."
      ></saa-wizard-step>
      <saa-wizard-step
        step="3"
        title="Metas"
        description="Define tus objetivos de aprendizaje."
      ></saa-wizard-step>
    </div>
  `,
})
export class StudentOnboardingComponent {}
