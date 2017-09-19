import { PipeTransform, Pipe } from '@angular/core'; 
import { IEntry } from './entry';

@Pipe({
    name: 'entryFilter'
})

export class EntryFilterPipe implements PipeTransform {
    
    transform(value: IEntry[], filterBy: string): IEntry[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((entry: IEntry) => 
            entry.entryName.toLocaleLowerCase().indexOf(filterBy) != -1) : value;
     }
}