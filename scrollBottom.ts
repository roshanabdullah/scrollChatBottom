import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked} from '@angular/core';


@ViewChild('scrollChat') scrollChat!: ElementRef;

ngOnInit(): void {
      this.scrollToBottom();
  }


  ngAfterViewChecked(): void {
      this.scrollToBottom()
  }
  
  
  scrollToBottom(): void {
  try {
      this.scrollChat.nativeElement.scrollTop = this.scrollChat.nativeElement.scrollHeight;
  } catch(err) { 
console.log(err)
}                 
  }
  
  //html
  
  <div class="editor-text-container" #scrollChat> <!-- where the scroll is -->
