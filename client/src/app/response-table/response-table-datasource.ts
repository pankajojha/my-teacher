import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ResponseTableItem {
  id: number;
  name: string;
  studentId: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ResponseTableItem[] = [
  {id: 1, name: 'Hydrogen', studentId:1},
  {id: 2, name: 'Helium', studentId:1},
  {id: 3, name: 'Lithium', studentId:1},
  {id: 4, name: 'Beryllium', studentId:2},
  {id: 5, name: 'Boron', studentId:2}, 
  {id: 6, name: 'Carbon', studentId:1},
  {id: 7, name: 'Nitrogen', studentId:2},
  {id: 8, name: 'Oxygen', studentId:3},
  {id: 9, name: 'Fluorine', studentId:3},
  {id: 10, name: 'Neon', studentId:3},
  {id: 11, name: 'Sodium', studentId:3},
  {id: 12, name: 'Magnesium', studentId:3},
  {id: 13, name: 'Aluminum', studentId:3},
  {id: 14, name: 'Silicon', studentId:3},
  {id: 15, name: 'Phosphorus', studentId:3},
  {id: 16, name: 'Sulfur', studentId:13},
  {id: 17, name: 'Chlorine', studentId:4},
  {id: 18, name: 'Argon', studentId:26},
  {id: 19, name: 'Potassium', studentId:14},
  {id: 20, name: 'Calcium', studentId:15},
  {id: 9, name: 'Fluorine', studentId:13},
  {id: 10, name: 'Neon', studentId:13},
  {id: 11, name: 'Sodium', studentId:13},
  {id: 12, name: 'Magnesium', studentId:15},
  {id: 13, name: 'Aluminum', studentId:15},
  {id: 14, name: 'Silicon', studentId:15},
  {id: 15, name: 'Phosphorus', studentId:15},
  {id: 16, name: 'Sulfur', studentId:15},
  {id: 17, name: 'Chlorine', studentId:15},
  {id: 18, name: 'Argon', studentId:14},
  {id: 19, name: 'Potassium', studentId:14},
  {id: 20, name: 'Calcium', studentId:15},
  {id: 9, name: 'Fluorine', studentId:13},
  {id: 10, name: 'Neon', studentId:13},
  {id: 11, name: 'Sodium', studentId:16},
  {id: 12, name: 'Magnesium', studentId:16},
  {id: 13, name: 'Aluminum', studentId:16},
  {id: 14, name: 'Silicon', studentId:16},
  {id: 15, name: 'Phosphorus', studentId:16},
  {id: 16, name: 'Sulfur', studentId:16},
  {id: 17, name: 'Chlorine', studentId:16},
  {id: 18, name: 'Argon', studentId:16},
  {id: 19, name: 'Potassium', studentId:26},
  {id: 20, name: 'Calcium', studentId:26}
];

/**
 * Data source for the ResponseTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ResponseTableDataSource extends DataSource<ResponseTableItem> {
  data: ResponseTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ResponseTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ResponseTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ResponseTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
