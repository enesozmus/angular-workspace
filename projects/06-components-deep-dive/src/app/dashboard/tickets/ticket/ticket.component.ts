import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // ticket = input.required<Ticket>();
  @Input({ required: true }) ticket!: Ticket;

  detailsVisible = signal(false);
  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  // close = output();
  @Output() close = new EventEmitter<void>();
  onMarkAsCompleted() {
    this.close.emit();
  }
}
