import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHCOProps {
    ({ children, product }: ProductCardProps ) : JSX.Element,
    Title: ( Props: ProductTitleProps) => JSX.Element,
    Image: ( Props: ProductImageProps) => JSX.Element,
    Buttons: ( props: ProductButtonsProps) => JSX.Element
}