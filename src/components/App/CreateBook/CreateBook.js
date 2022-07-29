import { FormsHeader } from '../FormsHeader/FormsHeader';
import { CreateForm } from './CreateForm/CreateForm';

export const CreateBook = () => {
    return (
        <section className="create-book">
            <FormsHeader
                headerTitle="Create new record"
                imgLeft="./assets/add_edit3.png"
                imgRight="./assets/book-icon2.png"
                headerClassName="create-form-header"
            />
            <CreateForm />
        </section>
    );
}