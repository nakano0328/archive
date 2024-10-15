// app/linear_algebra/test/page.tsx
import PythonEditor from '@/app/components/PythonEditor';

const PythonEditorPage = ({ params }: { params: { pages: string } }) => {
    const { pages } = params;  // サーバー側でparamsを受け取る

    // ページパラメータがない場合にデフォルトのファイル名を使用
    const defaultFile = `@/app/linear_algebra/test/command1.py`;

    return (
        <div>
            <h1>Python Editor for {pages}</h1>
            {/* クエリパラメータが存在しない場合はデフォルトのファイル名を使用 */}
            <PythonEditor defaultFile={defaultFile} />
        </div>
    );
};

export default PythonEditorPage;
