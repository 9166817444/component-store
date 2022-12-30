import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-editor-layout',
  template: `
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EditorLayout {}