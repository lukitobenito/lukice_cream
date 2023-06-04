import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule


import { AppModule } from './app/app.module';
import { addSyntheticLeadingComment } from 'typescript';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  