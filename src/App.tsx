import '@xelene/tgui/dist/styles.css';
import {AppRoot, SegmentedControl} from '@xelene/tgui';
import {useState} from "react";

const labels = [
    {
        label: 'Label',
        value: 'label',
    },
    {
        label: 'Label 2',
        value: 'label2',
    },
    {
        label: 'Label 3',
        value: 'label3',
    },
];

const App = () => {
    const [selected, setSelected] = useState(labels[0].value);

    return (
        <AppRoot>
            <SegmentedControl>
                {labels.map(({ value, label }) => (
                    <SegmentedControl.Item
                        key={value}
                        selected={selected === value}
                        onClick={() => setSelected(value)}
                    >
                        {label}
                    </SegmentedControl.Item>
                ))}
            </SegmentedControl>
        </AppRoot>
    );
};

export default App
