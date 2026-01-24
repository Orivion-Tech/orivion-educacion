import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';

@Component({
  selector: 'saa-data-table',
  standalone: true,
  imports: [MatTableModule, NgFor],
  template: `
    <table mat-table [dataSource]="data" class="w-full">
      <ng-container *ngFor="let column of columns" [matColumnDef]="column">
        <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
        <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columns"></tr>
      <tr mat-row *matRowDef="let row; columns: columns"></tr>
    </table>
  `,
})
export class DataTableComponent {
  @Input() columns: string[] = [];
  @Input() data: Record<string, string | number>[] = [];
}
