import { FormsHeader } from '../FormsHeader/FormsHeader';
import { EditForm } from './EditForm/EditForm';

export const EditBook = () => {
    return (
        <section className="edit-book">
            <FormsHeader
                headerTitle="Edit record"
                imgLeft="./assets/add_edit1.png"
                imgRight="./assets/book-icon1.png"
                headerClassName="edit-form-header"
            />
            <EditForm />
        </section>
    );
}