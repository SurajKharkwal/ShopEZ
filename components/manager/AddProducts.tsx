"use client";
import { UploadButton } from "@/utils/uploadthing";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Switch } from "@nextui-org/switch";
import { cn } from "@nextui-org/theme";
import { FaIcons } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

export default function AddProductsComp() {
  return (
    <form className="w-full max-w-7xl space-y-3">
      <div>
        <h1 className="text-3xl font-semibold my-4">Add Products</h1>
        <Input
          label="Product Title"
          description="Mention the product title in 100 words only"
        />
      </div>
      <div>
        <h3 className="p-4">Variants</h3>
        <section className="flex gap-4 max-md:flex-col">
          <Input
            label="Color"
            defaultValue="#fff"
            description="Provide up to 5 color codes, separated by commas"
          />
          <Input
            label="Size"
            description="Provide up to 5 sizes (e.g., XL, XXL), separated by commas"
          />
        </section>
      </div>
      <div>
        <h3 className="p-4">Pricing and Shipping</h3>
        <section className="flex gap-4 max-md:flex-col">
          <Input
            label="Price"
            description="Price should not exceed Rs 1,00,000"
          />
          <Input
            label="Shipping Address"
            description="Enter the shipping address."
          />
        </section>
      </div>
      <div>
        <h3 className="p-4">Details</h3>
        <section className="flex gap-4 max-md:flex-col">
          <Input
            label="Short Title"
            description="Provide a brief title (1-2 words)"
          />
          <Input
            label="Summary"
            description={
              <div className="gap-1 flex">
                <Button radius="lg" size="sm" variant="flat">
                  Point 1
                </Button>
                <Button radius="lg" size="sm" variant="flat">
                  Point 2
                </Button>
                <Button radius="lg" size="sm" variant="flat">
                  Point 3
                </Button>
              </div>
            }
          />
        </section>
        <Button startContent={<FiPlusCircle />} variant="flat" size="sm">
          Add
        </Button>
      </div>
      <div>
        <h3 className="p-4">DesCription and Search Query</h3>
        <section className="flex gap-4 max-md:flex-col">
          <Textarea
            label="Short Title"
            description="Provide a brief title (1-2 words)"
          />
          <Input
            label="Search Queries"
            description={
              <div className="gap-1 items-center flex">
                <Button radius="lg" size="sm" variant="flat">
                  Point 1
                </Button>
                <Button radius="lg" size="sm" variant="flat">
                  Point 2
                </Button>
                <Button radius="lg" size="sm" variant="flat">
                  Point 3
                </Button>
                Provide a brief title (1-2 words)
              </div>
            }
          />
        </section>
      </div>
      <div>
        <h3 className="p-4">Image and Availability</h3>
        <section className="flex gap-4 max-md:flex-col">
          <UploadButton
            appearance={{
              container:
                "w-full flex item-center justify-center border-2 rounded-md dark:border-neutral-800 bg-zinc-800 light:bg-neutral-100 shadow-inner h-[100px] rounded-",
            }}
            className="ut-button:bg-primary ut-allowed-content:text-default-500"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <div className=" w-full h-full flex items-start justify-start">
            <Switch
              classNames={{
                base: cn(
                  "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                  "justify-between cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                  "data-[selected=true]:border-primary"
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn(
                  "w-6 h-6 border-2 shadow-lg",
                  "group-data-[hover=true]:border-primary",
                  //selected
                  "group-data-[selected=true]:ml-6",
                  // pressed
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4"
                ),
              }}
            >
              <div className="flex flex-col gap-1">
                <p className="text-medium">Is Available For Purchase</p>
                <p className="text-tiny text-default-400">
                  Get access to new features before they are released.
                </p>
              </div>
            </Switch>
          </div>
        </section>
      </div>
      <div className="w-full flex items-center justify-center h-32">
        <Button
          radius="sm"
          color="primary"
          className=" max-w-md w-full"
          type="submit"
        >
          Finilze the Product
        </Button>
      </div>
    </form>
  );
}
