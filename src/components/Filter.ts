type Path<T> = T extends object
  ? {
      [K in keyof T]: [K, ...Path<T[K]>] | [K];
    }[keyof T]
  : [];

const getValueByPath = (obj: any, pathArray: string[]): any =>
  pathArray.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
    obj
  );

export class Filter<T> {
  private data: T[];
  private filters: ((item: T) => boolean)[] = [];

  constructor(data: T[]) {
    this.data = data;
  }

  static from<T>(array: T[]) {
    return new Filter(array);
  }

  static normalizeString(str: string) {
    return str
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  private applyFilter(
    path: Path<T>,
    predicate: (value: any) => boolean
  ): Filter<T> {
    this.filters.push((item) => {
      const value = getValueByPath(item, path as string[]);
      return Array.isArray(value) ? value.some(predicate) : predicate(value);
    });
    return this;
  }

  filterByString(criteria: string, path: Path<T>): Filter<T> {
    if (criteria === "") return this;
    const normalizedCriteria = Filter.normalizeString(criteria);
    return this.applyFilter(path, (value) => {
      const normalizedVal =
        typeof value === "string" ? Filter.normalizeString(value) : "";
      return normalizedVal.includes(normalizedCriteria);
    });
  }

  filterByNumber(criteria: string, path: Path<T>): Filter<T> {
    if (isNaN(+criteria) || criteria === "") return this;
    const numCriteria = +criteria;
    return this.applyFilter(path, (value) => +value === numCriteria);
  }

  filterByCheck(criteria: string[], path: Path<T>): Filter<T> {
    if (criteria.length === 0) return this;
    return this.applyFilter(path, (value) => criteria.includes(value));
  }

  filterByObject(criteria: Record<string, any>, path: Path<T>): Filter<T> {
    const matchesCriteria = (
      obj: any,
      criteria: Record<string, any>
    ): boolean =>
      Object.keys(criteria).every((key) => {
        if (typeof criteria[key] === "object" && criteria[key] !== null) {
          return Array.isArray(obj[key])
            ? obj[key].some((item: any) => matchesCriteria(item, criteria[key]))
            : matchesCriteria(obj[key], criteria[key]);
        }
        return obj[key] === criteria[key];
      });

    return this.applyFilter(path, (subItem) =>
      matchesCriteria(subItem, criteria)
    );
  }

  union() {
    if (this.filters.length === 0) return this;
    this.data = this.data.filter((item) =>
      this.filters.some((filterFunc) => filterFunc(item))
    );
    this.filters = [];
    return this;
  }

  disjunction() {
    if (this.filters.length === 0) return this;
    this.data = this.filters.reduce(
      (filteredData, filterFunc) => filteredData.filter(filterFunc),
      this.data
    );
    this.filters = [];
    return this;
  }

  wrap() {
    return this.data;
  }
}
