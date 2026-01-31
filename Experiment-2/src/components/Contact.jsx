import TextField from './TextField';
import Button from './Button';
import Checkbox from './Checkbox';

export default function Contact() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Contact Page</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
                <section>
                    <h3>Contact Form</h3>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <TextField />
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 10 }}>
                        <span>Agree to terms:</span>
                        <Checkbox />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button />
                    </div>
                </section>
            </div>
        </div>
    );
}