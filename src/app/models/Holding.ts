export interface Holding {
  /**
   * set to null if creating new entry
   */
  _key: string | null;
  symbol: string;
  amount: number;
  exchange: string | null;
  /**
   * set to null if creating new entry
   */
  owner: string | null;
}
