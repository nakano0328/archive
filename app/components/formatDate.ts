// 日付を yyyy/mm/dd 形式で表示する関数
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月を2桁にする
  const day = String(date.getDate()).padStart(2, "0"); // 日を2桁にする
  return `${year}/${month}/${day}`;
};
