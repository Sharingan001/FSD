import Checkbox from './Checkbox';
import Rating from './Rating';
import Button from './Button';

export default function About() {
    return (
        <div style={{ padding: 20 }}>
            <h2>About Page</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
                <section>
                    <h3>Checkbox</h3>
                    <Checkbox />
                </section>
                <section>
                    <h3>Rating</h3>
                    <Rating />
                </section>
                <section>
                    <h3>Button</h3>
                    <Button />
                </section>
            </div>
        </div>
    );
}