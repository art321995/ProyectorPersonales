"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const SearchForm = () => {
    const form = useForm ();
  return (
    <div className="grid w-full items-end gap-4 rounded-lg bg-black sm:grid-cols-2 lg:grid-cols-4 p-6">
        <Form {...form}>
            <FormField control={form.control} name="Address" render={({field}) => {
                return(
                    <FormItem>
                        <FormLabel className="text-white">Propiedad</FormLabel>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Compra">Compra</SelectItem>
                                <SelectItem value="Venta">Venta</SelectItem>
                                <SelectItem value="Renta">Renta</SelectItem>                          
                            </SelectContent>
                        </Select>
                    </FormItem>
                );
            }}></FormField>
            <FormField control={form.control} name="Address" render={({field}) => {
                return(
                    <FormItem>
                        <FormLabel className="text-white">Direccion</FormLabel>
                        <FormControl>
                            <Input placeholder="Buscar por direccion" />
                        </FormControl>
                    </FormItem>
                );
            }}>
            </FormField>
            <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-white">Fecha Compra//Venta</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Elija una Fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-800 text-white">
         Buscar   
        </Button> 
        </Form>
    </div>
  )
}

export default SearchForm