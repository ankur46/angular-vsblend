import { Type } from '@angular/core';
import { DebuggerComponent } from '../../modules/file-name-panel/debugger/debugger.component';
import { ExtensionsComponent } from '../../modules/file-name-panel/extensions/extensions.component';
import { FileComponent } from '../../modules/file-name-panel/file/file.component';
import { GitComponent } from '../../modules/file-name-panel/git/git.component';
import { SearchComponent } from '../../modules/file-name-panel/search/search.component';

export const FilePanelComponents: Type<unknown>[] = [
  SearchComponent,
  FileComponent,
  GitComponent,
  DebuggerComponent,
  ExtensionsComponent,
];
