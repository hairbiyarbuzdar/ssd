export function ProductExpiryNotice({ product }: { product?: { expiry_date?: string | null } }) {
  if (!product) return null;
  return <p className="mt-1 text-xs" style={{ color: "var(--gray-800)" }}>
    {product.expiry_date ? `Expires ${product.expiry_date.slice(0, 10)}` : "Non-expiry product"}
  </p>;
}
