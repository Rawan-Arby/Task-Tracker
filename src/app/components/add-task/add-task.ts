import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../../Task';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean =false;
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private uiService: Ui){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=> (this.showAddTask = value));
  }
  ngOnInit(): void {

  }
  onSubmit(){
    if(!this.text) {
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder:this.reminder
    }
    //emit event
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
