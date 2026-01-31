import Button from './Button';
import TextField from './TextField';
import Select from './Select';

export default function Home() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Home Page</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
                <section>
                    <h3>Button</h3>
                    <Button />
                </section>
                <section>
                    <h3>TextField</h3>
                    <TextField />
                </section>
                <section>
                    <h3>Select</h3>
                    <Select />
                </section>
            </div>
        </div>
    );
}