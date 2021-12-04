import IRepository from "../../Core/Data/IRepository";
import Category from "../Category";
import Product from "../Product";

export default interface IProductRepository extends IRepository<Product> {
  get(): Promise<Product[]>;
  find(productId: number): Promise<Product>;
  getByCategory(categoryId: number): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  findCategory(categoryId: number): Promise<Category>;
  add(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  addCategory(category: Category): Promise<void>;
  updateCategory(category: Category): Promise<void>;
}
