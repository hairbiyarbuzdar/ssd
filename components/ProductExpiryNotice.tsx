export function ProductExpiryNotice({ product }: { product?: { expiry_date?: string | null; quantity?: number } }) {
  if (!product) return null;
  return <p className="mt-1 text-xs" style={{ color: "var(--gray-800)" }}>
    {product.quantity === 0 ? "Out of stock" : product.expiry_date ? `Next FIFO batch expires ${product.expiry_date.slice(0, 10)}` : "Next FIFO batch is non-expiry"}
  </p>;
}
