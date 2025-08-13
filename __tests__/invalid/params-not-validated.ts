// Vi phạm: Không validate params, không dùng đúng hook
function Page({ id }) {
  // Không có type rõ ràng, không dùng useRequestParams, không có usePageParams
  return <div>{id}</div>;
}
