import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escapeHtml',
  standalone: true,
})
export class EscapeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/&/g, '&amp;');
  }
}
