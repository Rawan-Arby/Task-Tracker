import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
