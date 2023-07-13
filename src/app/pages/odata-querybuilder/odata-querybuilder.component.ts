import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ALanguage } from 'src/app/services/language';
import { LanguageFactory } from 'src/app/services/language-factory.service';

@Component({
  selector: 'app-odata-querybuilder',
  templateUrl: './odata-querybuilder.component.html',
  styleUrls: ['./odata-querybuilder.component.css']
})
export class ODataQuerybuilderComponent implements OnInit, AfterViewInit {

  generatedUrl?: string;
  jsonResult: string = ""
  error?: string;
  lg: ALanguage;
  corsError = false;

  constructor(private http: HttpClient, private renderer: Renderer2, lFactory: LanguageFactory) {
    this.lg = lFactory.getLanguageService();
  }

  ngOnInit(): void {
  }

  update() {
    this.getResults();
  }

  getResults() {
    if (this.generatedUrl == null) return
    this.http.get<string>(this.generatedUrl + "&$top=10")
      .pipe(
        catchError((error: any) => {
          if (error.status === 0) this.corsError = true
          this.error = error.error.error.message;
          // Handle the error here
          console.log('An error occurred:', error);
          return of(null);
        })
      )
      .subscribe((r) => {
        if (r != null) {
          this.jsonResult = r;
          this.error = undefined;
        }
      });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedUrl!);
  }

  @ViewChild('resizer') resizerRef!: ElementRef;
  @ViewChild('leftSide') leftSideRef!: ElementRef;
  @ViewChild('rightSide') rightSideRef!: ElementRef;

  private mouseMoveHandler!: EventListener;
  private mouseUpHandler!: EventListener;
  private startX: number = 0;
  private startLeftWidth: number = 0;

  ngAfterViewInit() {
    const resizerElement = this.resizerRef.nativeElement;
    const leftSideElement = this.leftSideRef.nativeElement;
    const rightSideElement = this.rightSideRef.nativeElement;

    const mouseDownHandler = (event: MouseEvent) => {
      this.moving = true
      this.startX = event.clientX;
      this.startLeftWidth = leftSideElement.getBoundingClientRect().width;

      this.renderer.setStyle(document.body, 'cursor', 'col-resize');
      this.renderer.setStyle(leftSideElement, 'user-select', 'none');
      this.renderer.setStyle(leftSideElement, 'pointer-events', 'none');
      this.renderer.setStyle(rightSideElement, 'user-select', 'none');
      this.renderer.setStyle(rightSideElement, 'pointer-events', 'none');

      this.mouseMoveHandler = this.onMouseMove.bind(this);
      this.mouseUpHandler = this.onMouseUp.bind(this);

      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    };

    resizerElement.addEventListener('mousedown', mouseDownHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);
  }

  private onMouseMove(event: any) {
    if (!this.moving) return
    const dx = event.clientX - this.startX;

    const newLeftWidth =
      ((this.startLeftWidth + dx) * 100) /
      this.resizerRef.nativeElement.parentNode.getBoundingClientRect().width;
    this.renderer.setStyle(this.leftSideRef.nativeElement, 'width', `${newLeftWidth}%`);
  }
  moving = false;

  private onMouseUp() {
    this.moving = false;
    this.renderer.removeStyle(document.body, 'cursor');
    this.renderer.removeStyle(this.leftSideRef.nativeElement, 'user-select');
    this.renderer.removeStyle(this.leftSideRef.nativeElement, 'pointer-events');
    this.renderer.removeStyle(this.rightSideRef.nativeElement, 'user-select');
    this.renderer.removeStyle(this.rightSideRef.nativeElement, 'pointer-events');
  }
}