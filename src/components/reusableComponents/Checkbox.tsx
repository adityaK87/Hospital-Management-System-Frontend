import { Label } from "../../components/ui/label";

interface CheckboxProps {
	label: string;
	id: string;
	checked?: boolean;
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CheckboxWithLabel = ({
	label,
	id,
	checked,
	handleChange,
}: CheckboxProps) => {
	return (
		<div>
			<div className="flex items-center space-x-2">
				<input
					id={id}
					type="checkbox"
					className="!bg-white w-4 h-4"
					checked={checked}
					onChange={handleChange}
				/>
				<Label htmlFor={id}>{label}</Label>
			</div>
		</div>
	);
};
