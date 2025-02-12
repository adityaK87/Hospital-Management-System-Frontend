# Reusable Components Documentation

This document provides an overview and usage instructions for the reusable components implemented in the codebase. Each component is designed for modularity, maintainability, and reusability.

---

## 1. **FlexibleButton**

### Description

A customizable button component with support for variants, icons, and text.

### Props

| Prop Name | Type                       | Required | Description                             |
| --------- | -------------------------- | -------- | --------------------------------------- |
| `text`    | `string`                   | Yes      | The text to be displayed on the button. |
| `variant` | `'primary' \| 'secondary'` | Yes      | Specifies the button style variant.     |
| `icon`    | `ReactElement`             | No       | Optional icon to display in the button. |
| `onClick` | `() => void`               | No       | Optional click event handler.           |

### Example Usage

```tsx
<FlexibleButton
	text="Submit"
	variant="primary"
	icon={<Icon />}
	onClick={() => alert("Button clicked")}
/>
```

---

## 2. **CircularIconButton**

### Description

A button with a circular shape designed to display only an icon.

### Props

| Prop Name | Type           | Required | Description                            |
| --------- | -------------- | -------- | -------------------------------------- |
| `icon`    | `ReactElement` | Yes      | The icon to display inside the button. |

### Example Usage

```tsx
<CircularIconButton icon={<Icon />} />
```

---

## 3. **InputComponent**

### Description

A styled input field with optional titles for the left and right sides of the label.

### Props

| Prop Name         | Type                    | Required | Description                                  |
| ----------------- | ----------------------- | -------- | -------------------------------------------- |
| `inputTitleLeft`  | `string`                | No       | Optional text for the left title label.      |
| `inputTitleRight` | `string`                | No       | Optional text for the right title label.     |
| `placeholder`     | `string`                | Yes      | Placeholder text for the input field.        |
| `type`            | `'email' \| 'password'` | Yes      | The type of input field (email or password). |

### Example Usage

```tsx
<InputComponent
	inputTitleLeft="Email"
	inputTitleRight="Required"
	placeholder="Enter your email"
	type="email"
/>
```

---

## 4. **StatusBadge**

### Description

A badge component that dynamically displays a status with corresponding styles.

### Props

| Prop Name | Type                                   | Required | Description                         |
| --------- | -------------------------------------- | -------- | ----------------------------------- |
| `status`  | `'closed' \| 'pending' \| 'scheduled'` | Yes      | The status to display on the badge. |

### Example Usage

```tsx
<StatusBadge status="pending" />
```

---

## 5. **MyCardHeader**

### Description

A component to render a header section for a card with a title and description.

### Props

| Prop Name         | Type     | Required | Description                               |
| ----------------- | -------- | -------- | ----------------------------------------- |
| `cardTitle`       | `string` | Yes      | The title text for the card header.       |
| `cardDescription` | `string` | Yes      | The description text for the card header. |

### Example Usage

```tsx
<MyCardHeader
	cardTitle="Card Title"
	cardDescription="This is a description for the card."
/>
```

## 6. **CheckboxWithLabel**

### Description

A reusable component that renders a checkbox with an associated label.

### Props

| Prop Name      | Type                                                   | Required | Description                                          |
| -------------- | ------------------------------------------------------ | -------- | ---------------------------------------------------- |
| `label`        | `string`                                               | Yes      | The title text for the card header.                  |
| `id`           | `string`                                               | Yes      | The description text for the card header.            |
| `checked`      | `string`                                               | No       | Controls whether the checkbox is checked.            |
| `handleChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | No       | Callback triggered when the checkbox value changes.. |

### Example Usage

```tsx
<CheckboxWithLabel
	label="Accept terms and conditions"
	id="terms"
	checked={true}
	handleChange={(e) => console.log(e.target.checked)}
/>
```

## 7. **AppSidebar**

The `AppSidebar` component itself does not accept props. Instead, it is composed of smaller components like `AppSidebarHeader`, `AppSidebarGroupContent`, `AppSidebarMenuItem`, and `AppSidebarFooter` which are customizable.

### Subcomponents

#### **1. AppSidebarHeader**

##### Description

Displays the header section of the sidebar, typically used for branding or displaying the application name/logo.

##### Example Usage

```tsx
<AppSidebarHeader />
```

#### **2. AppSidebarFooter**

Displays the footer section of the sidebar, which can include actions like "Contact Us" or "Logout".

### Example Usage

```tsx
<AppSidebarFooter />
```

#### **3. AppSidebarMenuItem**

A component to display a single menu item inside the sidebar. Includes an icon, a title, and a navigation link.

### Props

| Prop Name | Type           | Required | Description                                  |
| --------- | -------------- | -------- | -------------------------------------------- |
| `title`   | `string`       | Yes      | The label for the menu item.                 |
| `url`     | `string`       | Yes      | The navigation URL for the menu item.        |
| `icon`    | `ReactElement` | Yes      | The icon to display alongside the menu item. |

### Example Usage

```tsx
<AppSidebarMenuItem
	title="Dashboard"
	url="/dashboard"
	icon={<DashboardIcon />}
/>
```

### **4. AppSidebarGroupContent**

Displays a group of menu items categorized under a specific label.

### Props

| Prop Name           | Type         | Required | Description                                     |
| ------------------- | ------------ | -------- | ----------------------------------------------- |
| `groupLabelHeading` | `string`     | Yes      | The heading or label for the group.             |
| `menuList`          | `MenuItem[]` | Yes      | An array of menu items to display in the group. |

`MenuItem` Type

```tsx
interface MenuItem {
	title: string;
	url: string;
	icon: ReactElement;
}
```

### Example Usage

```tsx
<AppSidebarGroupContent
	groupLabelHeading="Modules"
	menuList={[
		{ title: "Module 1", url: "/module1", icon: <Module1Icon /> },
		{ title: "Module 2", url: "/module2", icon: <Module2Icon /> },
	]}
/>
```

## 8. **SubMenuItem**

The SubMenuItem component is used to render a single menu item with an icon and a label. It is designed for use in dropdowns or navigation menus.

### Props

| Prop Name   | Type           | Required | Description                                 |
| ----------- | -------------- | -------- | ------------------------------------------- |
| `menuIcon`  | `ReactElement` | Yes      | The icon to display next to the menu label. |
| `menuLabel` | `string`       | Yes      | The text label for the menu item.           |

### Example Usage

```tsx
<SubMenuItem menuIcon={<ManageAccountIcon />} menuLabel="Manage Account" />
```

## 9. **DashboardCard**

The `DashboardCard` component is a reusable UI element designed to display key metrics on a dashboard. It includes a title, an icon, numerical data, and a percentage indicator, with styling variations based on the card type.

### Props

| Prop Name       | Type     | Required | Description                                                                                 |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------- |
| `dashboardData` | `object` | Yes      | Contains the data to display in the card. See below for detailed structure.                 |
| `type`          | `string` | Yes      | Specifies the type of card. Accepted values: `patient`, `staff`, `appointments`, `expenses` |

`dashboardData` Structure

```tsx
dashboardData: {
	icon: ReactElement;
	title: string;
	totalCount: number;
	percent: number;
}
```

### Example Usage

```tsx
<DashboardCard dashboardData={dashboardData} type="patient" />
```

## 10. **MyTable**

The `MyTable` is reusable UI component to create Table. It Dynamically generates table headers and rows based on input data.

### Props

| Prop Name      | Type          | Required | Description                               |
| -------------- | ------------- | -------- | ----------------------------------------- |
| `tableColumns` | `string[]`    | Yes      | Array of column names.                    |
| `rowsData`     | `T[]`         | Yes      | Array of row objects                      |
| `columns`      | `(keyof T)[]` | Yes      | Array of keys defining displayed columns. |

### Example Usage

```tsx
const tableColumns = ["Name", "Age", "Email"]; // Table headers
const rowsData = [
	{ name: "John Doe", age: 25, email: "john@example.com" },
	{ name: "Jane Doe", age: 28, email: "jane@example.com" },
];

<MyTable
	tableColumns={tableColumns}
	rowsData={rowsData}
	columns={["name", "age", "email"]}
/>;
```

## 11. **Pagination**

Provides previous and next page controls. Displays the current page and total pages. Includes a dropdown to select page size.

### Props

| Prop Name      | Type                        | Required | Description                          |
| -------------- | --------------------------- | -------- | ------------------------------------ |
| `currentPage`  | `number`                    | Yes      | The current active page.             |
| `totalPages`   | `number`                    | Yes      | The total number of available pages. |
| `onPageChange` | `(newPage: number) => void` | Yes      | Function to handle page changes.     |

### Example Usage

```tsx
<Pagination
	currentPage={currentPage}
	totalPages={totalPages}
	onPageChange={(newPage) => setCurrentPage(newPage)}
/>
```
